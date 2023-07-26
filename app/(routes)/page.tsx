import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0

const HomePage = async () => {
  const products = await getProducts({isFeatured: true})
  const billboard = await getBillboard('785d3368-7ffa-4977-bc81-d5d5bacebf6e')
  return (
  <Container>
    <div className="space-y-10 pb-10">
      <Billboard data={billboard}/>
    </div>
  </Container>
  )
};

export default HomePage;
