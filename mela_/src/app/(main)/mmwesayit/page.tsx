// Bismillahirrahmanirrahim



import PostEditor from "@/components/mmwesayit/editor/PostEditor";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import ForYouFeed from "./ForYouFeed";

import SearchField from "@/components/SearchField";

export default function Home() {
  return (
    <main className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 space-y-5">

        <h1 className="text-3xl font-semibold">Programlar  Sayfası</h1>
        <Tabs defaultValue="for-you">
          <TabsList>
            <TabsTrigger value="for-you">Paylaşılanlar</TabsTrigger>
            <TabsTrigger value="mm">Yeni Gönderi Paylaş</TabsTrigger>

          </TabsList>
          <TabsContent value="for-you">
            <ForYouFeed />
          </TabsContent>
       
    





        <TabsContent value="mm">

  <PostEditor />

    </TabsContent>
    </Tabs>
      </div>
    </main>
  );
}
