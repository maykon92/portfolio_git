import { Box, Container, TextField, Typography, Button } from "@mui/material";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const service_id = import.meta.env.VITE_SERVICE_ID;
  const template_id = import.meta.env.VITE_TEMPLATE_ID;
  const public_key = import.meta.env.VITE_PUBLIC_KEY;

  console.log("Service ID:", service_id);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      setSending(true);

      await emailjs.sendForm(
        service_id,
        template_id,
        formRef.current,
        public_key
      );

      alert("Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box 
        component="form" 
        ref={formRef} 
        onSubmit={sendEmail}
        sx={{
          mt: 10,
          p: 4,
          borderRadius: 3,
          background: "#1c1c1c",
          boxShadow: "0 0 20px rgba(0,0,0,0.5)",
        }}
      >
        <Typography variant="h4" sx={{ mb: 1 }}>
          Contact
        </Typography>

        <Typography sx={{ mb: 3 }}>
          Let’s build something great together
        </Typography>

        <TextField 
          fullWidth  
          name="user_name" 
          label="Your Name" 
          sx={{ mb: 2 }} 
          required 
        />

        <TextField
          fullWidth
          name="user_email"
          label="Your Email"
          type="email"
          sx={{ mb: 2 }}
          required
        />

        <TextField
          fullWidth
          name="message"
          label="Your Message"
          multiline
          rows={5}
          sx={{ mb: 2 }}
          required
        />

        <Button 
          type="submit" 
          variant="contained" 
          disabled={sending} 
          fullWidth
          sx={{
            backgroundColor: "#1f1f1f",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#2b2b2b",
            },
          }}
        >
          {sending ? "Sending..." : "Send Message"}
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;