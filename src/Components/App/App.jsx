import React, { useCallback, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import TopBar from './components/Topbar';
import HowToReset from './components/HowToReset';
import MethodOne from './components/MethodOne';
import ServiceCenter from './components/ServiceCenter';
import MethodTwo from './components/MethodTwo';
import WhatBenefits from './components/WhatBenefits';
import AlreadyProduct from './components/AlreadyProduct';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';

const App = () => {
  const [isError, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [isFormSent, setFormSent] = useState(false);

  const validate = useCallback((e) => {
    e.preventDefault();
    const adrPattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;
    if (adrPattern.test(email) === false) {
      setError(true);
    } else {
      setError(false);
      setFormSent(true);
      alert('Ваш mail успешно отправлен');
    }
  }, [setError, setFormSent, email]);

  const handleEmailChange = useCallback((e) => {
    setEmail(e.target.value);
  }, [setEmail]);

  return (
    <div className='App'>
      <TopBar
        isError={isError}
        isFormSent={isFormSent}
        validate={validate}
        handleEmailChange={handleEmailChange}
        email={email}
      />
      <HowToReset />
      <MethodOne />
      <ServiceCenter
        isError={isError}
        isFormSent={isFormSent}
        validate={validate}
        handleEmailChange={handleEmailChange}
        email={email}
      />
      <MethodTwo />
      <WhatBenefits />
      <AlreadyProduct />
      <ContactUs />
      <Footer />
    </div>

  );
};


export default App;
