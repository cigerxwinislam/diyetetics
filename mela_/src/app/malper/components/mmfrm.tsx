// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain

"use client";
import React, { useState } from "react";
import { Card, Row, Col, Form, Button } from "react-bootstrap";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form gönderim işlemleri burada yapılabilir (örneğin, bir API'ye gönderim)
    console.log("Form Gönderildi:", { name, email, message });
    setSubmitted(true);
  };

  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px", // Mobil cihazlarda kenar boşluğu
      }}
    >
      <Card
        style={{
          opacity: 0.9,
          color: "black",
          textAlign: "center",
          maxWidth: "800px", // İçeriği sınırlamak için
          width: "100%", // Mobil uyumlu genişlik
        }}
      >
        <Card.Body>
          <Card.Title>İletişim Formu</Card.Title>
          <Card.Text>
            Sorularınız veya geri bildirimleriniz için bizimle iletişime geçin.
          </Card.Text>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Adınız</Form.Label>
              <Form.Control
                type="text"
                placeholder="Adınızı giriniz"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>E-posta</Form.Label>
              <Form.Control
                type="email"
                placeholder="E-posta adresinizi giriniz"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Mesajınız</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Mesajınızı yazınız"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Gönder
            </Button>
          </Form>
          {submitted && (
            <div className="mt-3 text-success">
              Mesajınız başarıyla gönderildi. Teşekkür ederiz!
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default ContactForm;