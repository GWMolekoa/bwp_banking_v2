import HeaderBox from '@/components/HeaderBox'


const Home = () => {
  const loggedIn = {firstName: "Wilson"};

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access & Manage Your Account & Transactions Efficiently"
          />
        </header>
      </div>
    </section>
  )
}

export default Home