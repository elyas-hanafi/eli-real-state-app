import Link from "next/link"
import Image from "next/image"
import { Flex, Box, Text, Button } from "@chakra-ui/react"
import { fetchApi , baseUrl } from "../utils/fetchApi"
const Banner = ({ purpose, titel1, titel2, desc1, desc2, buttonText, linkName, imageUrl }) => {
  return (
    <Flex flexWrap='wrap' justifyContent={`center`} alignItems={`center`} m='10'>
      <Image src={`${imageUrl}`} width='500' height={`500`} alt='banner' />
      <Box>
        <Text color={`gray.500`} fontSize='sm' fontWeight={`medium`}>{purpose}</Text>
        <Text fontSize='3xl' fontWeight={`bold`}>{titel1}<br />{titel2}</Text>
        <Text fontSize='lg' padding={`3`} fontWeight={`bold`} color={`gray.700`}>{desc1}<br />{desc2}</Text>
        <Button fontSize={`xl`} bg={`blue.300`} color='white'>
          <Link href={linkName}>{buttonText}</Link>
        </Button>
      </Box>
    </Flex>
  )
}
export default function Home({propertiesForSale , propertiesForRent}) {
  console.log(propertiesForSale , propertiesForRent)
  return (
    <Box>
      <h2>Hello</h2>
      <Banner purpose='RENT A HOME'
        title1='Rental Homes for'
        title2='Everyone'
        desc1=' Explore from Apartments, builder floors, villas'
        desc2='and more'
        buttonText='Explore Renting'
        linkName='/search?purpose=for-rent'
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'>

      </Banner>
      <Flex>

      </Flex>
      <Banner purpose='BUY A HOME'
        title1=' Find, Buy & Own Your'
        title2='Dream Home'
        desc1=' Explore from Apartments, land, builder floors,'
        desc2=' villas and more'
        buttonText='Explore Buying'
        linkName='/search?purpose=for-sale'
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'>

      </Banner>
      <Flex>

      </Flex>
    </Box>
  )
}

export async function getStaticProps(){
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}
