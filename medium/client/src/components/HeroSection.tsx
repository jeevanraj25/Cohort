import React from 'react'
import { Button } from './ui/button'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
    const naviagte = useNavigate();
  return (
    <div>
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/10 dark:to-secondary/10"></div>
          <div className="container mx-auto relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Welcome to Code404
              </h1>
              <p className="text-xl sm:text-2xl mb-8 text-muted-foreground">
                Discover insightful articles, expert opinions, and the latest trends
              </p>
              <Button onClick={() => naviagte("/signin")} size="lg" className="text-lg px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90">
                Start Reading
              </Button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-background dark:text-gray-800">
              <path fill="currentColor" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </section>
    </div>
  )
}

export default HeroSection
