export interface FormData {
  fullName: string;
  email: string;
  message: string;
  phone: string;
}

function EmailTemplate({ fullName, message, email, phone }: FormData) {
  return (
    <p>
      Nuovo messaggio ricevuto da {fullName}
      <br />
      <br />
      Contenuto: {message}
      <br />
      <br />
      Email: {email}
      <br />
      <br /> Phone: {phone}
    </p>
  );
}

export { EmailTemplate };
