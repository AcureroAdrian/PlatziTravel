import { Home, Navbar, Section, Recommended, RecommendedCard, Featured, FeaturedCard, FAQS, Footer, FAQ, ListItemLink  } from 'components'
import './App.css'

function App() {

  return (
    <div className='font-Montserrat'>
        <Navbar />
        <Section>
          <Home />
          <Recommended>
            <RecommendedCard index={1} title="Norway" description="Paisajes Increibles" />
            <RecommendedCard index={2} title="New York" description="La gran manzana" />
            <RecommendedCard index={3} title="Norway" description="Paisajes Increibles" />
          </Recommended>
          <Featured>
            <FeaturedCard title='Chicago' description='2 habitaciones, baño y cocina' index={1} />
            <FeaturedCard title='Chicago' description='2 habitaciones, baño y cocina' index={1} />
            <FeaturedCard title='Chicago' description='2 habitaciones, baño y cocina' index={1} />
            <FeaturedCard title='Chicago' description='2 habitaciones, baño y cocina' index={1} />
            <FeaturedCard title='Chicago' description='2 habitaciones, baño y cocina' index={1} />
          </Featured>
          <FAQS>
              <FAQ 
                title='Política de Cancelación' 
                description='Para estancias menores a una semana es importante avisar con 3 días de
		                        anticipación, de caso contario será sancionado.'
              />
              <FAQ
                title='Métodos de pago' 
                description='Aceptamos distintos métodos de pago: VISA, MasterCard, American Express,
                            Paypal y Binance' 
              />
              <FAQ 
                title='Mascotas' 
                description='El tema de las mascotas dependerá directamente del anfitrión.'
              />
              <FAQ 
                title='Información de Seguridad'
                description='Todas nuestras estancias cuentan con seguro en caso de accidentes'
              />
              <FAQ 
                title='Estancias Largas' 
                description='Contamos con estancias de hasta 3 meses, en este caso es requerido un
                            anticipo con un monto del 50% del valor de la renta'  
              />
          </FAQS>
        </Section>
        <Footer>
          <ListItemLink>Inversionistas</ListItemLink>
          <ListItemLink>Empleos</ListItemLink>
          <ListItemLink>Términos y condiciones</ListItemLink>
          <ListItemLink>Platzi Travel, Inc.</ListItemLink>
        </Footer>
    </div>
  )
}

export default App