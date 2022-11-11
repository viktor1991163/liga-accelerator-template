const telInput = document.querySelectorAll('[type="tel"]')

  const maskPhone = () => {
    telInput.forEach(element => {

      element.oninput = function(event) {
        event.target.setCustomValidity('');
      };

      element.oninvalid = function(event) {
        event.target.setCustomValidity('Введите номер в верном формате');
      };

      const maskOptions = {
        mask: '+{7}(000)000-00-00'
      };
      const mask = IMask(element, maskOptions);
    });
  };
export {maskPhone};
