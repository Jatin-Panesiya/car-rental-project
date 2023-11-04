import Footer from "@/components/Footer";
import Header from "@/components/Header";

function Home() {

  const carData = [
    {
      id:'1',
      carImages : {front:'',back:'',side:'',top:'',inside:'',full:'https://freepngimg.com/save/22421-bmw-x5-transparent-image/800x531'},
      carInfo : { carName : 'BMW X5' ,doors : '5', sunroof:true, AirCondition : true, color:'black', seats:'7', testYear:'2003-2018', category:'Luxury'},
      rentPrice : '',
      availability:true,
      vehicalCondition:'Good',
      termsAndCondition:'',
      additionalFeatures:'',
      legalRequirements:'',
      fuelType:'',
      average:'12km/leter',
      drivingType : 'automatic' 
    }
  ]

  return (
    <>
      <Header />
      {
        carData.map((data)=>{
          <div key={data.id}>
              <img src={data.carImages.full} alt="" />
          </div>
        })
      }
      <h1>Home Page</h1>
    </>
  )
}

export default Home;