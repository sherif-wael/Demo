import { Layout } from "../components/Layout";
import { Hero, About, Partners } from "../components/Sections";


function Home(){
  return (
    <Layout>
      <Hero />
      <About img="/images/about.jpg" name="about" />
      <About img="/images/admission.jpg" name="admission" rightSideImage />
      <Partners />
    </Layout>
  )
}

export default Home;