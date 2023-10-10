import Header from '../../Header'
import Footer from '../../Footer'


const DefaultLayout = ({ children }) => {
    return (
        <>
            <Header/>
            <main className='pt-16 bg-slate-100 min-h-[calc(100vh)]'>
                {children}
            </main>
            <Footer />

        </>
    )
}

export default DefaultLayout