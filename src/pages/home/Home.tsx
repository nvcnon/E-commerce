import EffectCoverFlow from "../../components/effectFade/EffectFade";
import ResponsiveBreakPoints from "../../components/responsiveBreakPoints/ResponsiveBreakPoints";
import Container from "../../components/container/Container";
import CategorySection from "../../components/categorySection/CategorySection";

const Home = () => {
  return (
    <div className="text-right">
      <EffectCoverFlow />

      <Container>
        <div className="px-4 md:px-0">

        <CategorySection />

        <div className="mt-10">
          <h1 className="mb-4 text-2xl font-bold">تیشرت ها</h1>
          <ResponsiveBreakPoints category="Tshirt" />

          <h1 className="mb-4 text-2xl font-bold">کفش ها</h1>
          <ResponsiveBreakPoints category="Shoes" />

          <h1 className="mb-4 text-2xl font-bold">کلاه ها</h1>
          <ResponsiveBreakPoints category="Hat" />
        </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;

