
export default defineNuxtPlugin(() => {
  const sessionUUID = useCookie('session_uuid')
  const eurUsd = useCookie('eurUsd')
  const eurRub = useCookie('eurRub')
  const {$api} = useNuxtApp()

    $api(`/api/data/courses`).then(response => {
        eurUsd.value = response['eurUsd'] || 0
        eurRub.value = response['eurRub'] || 0
    })


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
