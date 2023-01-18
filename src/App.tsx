import {
  Home,
  Navbar,
  Section,
  Recommended,
  RecommendedCard,
  Featured,
  FeaturedCard,
  FAQS,
  Footer,
  FAQ,
  ListItemLink,
  Tabbar,
  ListItemTitle,
} from "components";
import "./App.css";

function App() {
  const darkMode = () => {
    document.querySelector("html")?.classList.toggle("dark");
  };

  return (
    <div>
      <Navbar darkMode={darkMode} />
      <Section>
        <Home />
        <Recommended>
          <RecommendedCard
            title="Norway"
            description="Paisajes Increibles"
            className="bg-norway"
          />
          <RecommendedCard
            title="New York"
            description="La gran manzana"
            className="bg-new_york"
          />
          <RecommendedCard
            title="Yosemite"
            description="A break from the world"
            className="bg-yosemite"
          />
          <RecommendedCard
            title="Seattle"
            description="A Big City"
            className="bg-seattle"
          />
          <RecommendedCard
            title="Suiza"
            description="The best chocolate you'll ever taste"
            className="bg-switzerland"
          />
          <RecommendedCard
            title="Sydney"
            description="Get to know the famous opera"
            className="bg-sydney"
          />
          <RecommendedCard
            title="Edimburgo"
            description="A big natural city"
            className="bg-europe"
          />
          <RecommendedCard
            title="Norway"
            description="Paisajes Increibles"
            className="bg-norway"
          />
        </Recommended>
        <Featured>
          <FeaturedCard
            title="Chicago"
            description="2 rooms, bathrooms and kitchen"
            className="bg-chicago h-[600px]"
          />
          <div className="lg:flex lg:h-1/3 lg:w-full lg:space-x-4">
            <FeaturedCard
              title="Los angeles"
              description="4 rooms, 3 bathrooms, kitchen and private pool."
              className="lg:h-auto lg:bg-center bg-LA"
            />
            <div className="h-full w-full">
              <FeaturedCard
                title="Miami"
                description="3 rooms, 2 bathrooms, kitchen and amazing sea view"
                className="bg-miami"
              />
              <FeaturedCard
                title="Bali"
                description="2 rooms, 2 bathrooms, kitchen and private pool."
                className="bg-bali"
              />
            </div>
          </div>
        </Featured>
        <FAQS>
          <FAQ
            title="Política de Cancelación"
            description="Para estancias menores a una semana es importante avisar con 3 días de
		                        anticipación, de caso contario será sancionado."
          />
          <FAQ
            title="Métodos de pago"
            description="Aceptamos distintos métodos de pago: VISA, MasterCard, American Express,
                            Paypal y Binance"
          />
          <FAQ
            title="Mascotas"
            description="El tema de las mascotas dependerá directamente del anfitrión."
          />
          <FAQ
            title="Información de Seguridad"
            description="Todas nuestras estancias cuentan con seguro en caso de accidentes"
          />
          <FAQ
            title="Estancias Largas"
            description="Contamos con estancias de hasta 3 meses, en este caso es requerido un
                            anticipo con un monto del 50% del valor de la renta"
          />
        </FAQS>
      </Section>
      <Footer>
        <div>
          <ListItemTitle>Services</ListItemTitle>
          <ListItemLink>Branding</ListItemLink>
          <ListItemLink>Design</ListItemLink>
          <ListItemLink>Marketing</ListItemLink>
          <ListItemLink>Advertisement</ListItemLink>
        </div>
        <div>
          <ListItemTitle>Company</ListItemTitle>
          <ListItemLink>About us</ListItemLink>
          <ListItemLink>Investors</ListItemLink>
          <ListItemLink>Contact</ListItemLink>
          <ListItemLink>Jobs</ListItemLink>
        </div>
      </Footer>
      <Tabbar darkMode={darkMode} />
    </div>
  );
}

export default App;
