import { useState } from "react";
import emailjs from '@emailjs/browser';

const useSubmit = () => {
    const [isLoading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const submit = async (url, data) => {
      setLoading(true);  
      try {
        await emailjs.send('service_ap9jm14', 'template_f1uv8wq', data, 'o3pZRM38zmF1lSr0M');
        if(!response) {
          throw new Error ("something went wrong");
        } 
        setResponse({
          type: 'success',
          message: `Thanks for your submission ${data.firstName}. We will get back to you shortly!`
        })
      }
      catch(err) {
        setResponse({
          type: 'error',
          message: `Something went wrong. Please try again later!`
        })
      }        
      finally {
        setLoading(false);
      }

    }
    return { isLoading, response, submit}
}

export default useSubmit;