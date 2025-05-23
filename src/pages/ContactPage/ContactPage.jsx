import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import ContactForm from '../../features/ContactForm/ContactForm';
import usePageTitle from '../../hooks/usePageTitle';

export default function ContactPage() {
  usePageTitle('Contact');
  return (
    <>
      <Breadcrumb title="Contact" />
      <ContactForm />
    </>
  );
}
