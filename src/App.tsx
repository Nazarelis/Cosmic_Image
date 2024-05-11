// App
import { QueryClientProvider } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';
import NasaImageOfTheDay from './components/imgOfTheDay/ImgOfTheDay';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

const queryClient = new QueryClient();

const App: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <Header />
                <NasaImageOfTheDay />
                <Footer />
            </div>
        </QueryClientProvider>
    );
};

export default App;
