import ContactHeader from './Components/ContactHeader/ContactHeader';
import Navigation from './Components/Navigation/Navigation';
import ContactForm from './Components/ContactForm/ContactForm';

function App() {
  return (
    <div>
      <Navigation />
      <main className='main_container'>
      <ContactHeader />
      <ContactForm />
      </main>
    </div>
  );
}

export default App;
