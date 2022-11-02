const telInput = document.querySelectorAll('[type="tel"]')

  const maskPhone = () => {
    telInput.forEach(e => {
      const maskOptions = {
        mask: '+{7}(000)000-00-00'
      };
      const mask = IMask(e, maskOptions);
    });
  };
export {maskPhone};
