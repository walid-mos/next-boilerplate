import { Button } from "@/components/ui/Button"

const Home = () => ( 
  <main className="h-full grid place-items-center"> 
    <div className="text-center">
    <h1 className="text-3xl">Welcome to Our Boilerplate App</h1>
    <h3 className="text-xl">This is a brief description of our boilerplate app. It's designed to help you kickstart your next project.</h3>

    <Button variant="destructive" className="my-3"> This is a button </Button>
    </div>
  </main> 
)

export default Home
