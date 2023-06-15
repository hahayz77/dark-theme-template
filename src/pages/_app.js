import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <nav></nav> */}
      <Component {...pageProps} />
      {/* <footer></footer> */}
    </>
  )
}
