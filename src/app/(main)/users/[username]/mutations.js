// Bismillahirahmanirahim



// Bismillahirahmanirahim

import { useToast } from "@/components/ui/use-toast";
import { useUploadThing } from "@/lib/uploadthing";
import { updateUserProfile } from "./actions";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export function useUpdateProfileMutation() {
  const { toast } = useToast();
  const router = useRouter();
  const queryClient = useQueryClient();
  const { startUpload: startAvatarUpload } = useUploadThing("avatar");

  const mutation = {
    mutate: async ({ values, avatar }) => {
      return Promise.all([
        updateUserProfile(values),
        avatar && startAvatarUpload([avatar]),
      ]);
    },
    onSuccess: async ([updatedUser, uploadResult]) => {
      const newAvatarUrl = uploadResult?.[0].serverData.avatarUrl;

      const queryFilter = {
        queryKey: ["post-feed"],
      };

      await queryClient.cancelQueries(queryFilter);

      queryClient.setQueriesData(queryFilter, (oldData) => {
        if (!oldData) return;

        return {
          pageParams: oldData.pageParams,
          pages: oldData.pages.map((page) => ({
            nextCursor: page.nextCursor,
            posts: page.posts.map((post) => {
              if (post.user.id === updatedUser.id) {
                return {
                  ...post,
                  user: {
                    ...updatedUser,
                    avatarUrl: newAvatarUrl || updatedUser.avatarUrl,
                  },
                };
              }
              return post;
            }),
          })),
        };
      });

      router.refresh();

      toast({
        description: "Profile updated",
      });
    },
    onError(error) {
      console.error(error);
      toast({
        variant: "destructive",
        description: "Failed to update profile. Please try again.",
      });
    },
  };

  return mutation;
}

