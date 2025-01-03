
export default defineNuxtPlugin(() => {
    //const { session } = useUserSession()

    const runtimeConfig = useRuntimeConfig()
    const languageCookie = useCookie('i18n_redirected')
    const api = $fetch.create({
        baseURL: runtimeConfig.public.APIURL as string,
        onRequest({ request, options, error }) {
            options.headers = {
                ...options.headers,
                'Accept-Language': languageCookie.value
            }
            console.log(options.headers)
            // const auth_token = useCookie('auth_token')
            // if (auth_token.value) {
            //     console.log(auth_token.value)
            //     options.headers = options.headers || {}
            //     options.headers.Authorization = `Token ${auth_token.value}`
            // }
        },
        onResponseError({ response }) {
            // if (response.status === 401) {
            //     return navigateTo('/login')
            // }
        }
    })
    // Expose to useNuxtApp().$api
    return {
        provide: {
            api
        }
    }
})