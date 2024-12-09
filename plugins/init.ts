
export default defineNuxtPlugin(() => {
  const sessionUUID = useCookie('session_uuid')
  const eurUsd = useCookie('eurUsd')
  const eurRub = useCookie('eurRub')

    fetch('https://www.cbr-xml-daily.ru/latest.js')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Полученные данные:', data);
            eurRub.value = parseFloat(data['rates']['EUR'])
            eurUsd.value = parseFloat(data['rates']['USD']) / parseFloat(data['rates']['EUR'])
        })
        .catch(error => {
            console.error('Ошибка при выполнении запроса:', error);
        });


  function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0
        const v = c === 'x' ? r : (r & 0x3) | 0x8
        return v.toString(16)
      }
    )
  }



  if (!sessionUUID.value) {
    sessionUUID.value = uuidv4()
  }
})
