import Blog from '@/components/Blog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {  Search } from 'lucide-react'


const Blogs = () => {
  return (
    <div className='flex justify-center items-center '>
        <div className='max-w-5xl'>
        <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
           <Blog />
          
          </div>

          <aside className="md:w-1/3 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Search</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <Input type="search" placeholder="Search posts..." />
                  <Button type="submit"><Search className="h-4 w-4" /></Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 cursor-pointer">
                  <Badge>Technology</Badge>
                  <Badge>Design</Badge>
                  <Badge>Development</Badge>
                  <Badge>Career</Badge>
                  <Badge>Lifestyle</Badge>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>
        </div>
      
    </div>
  )
}

export default Blogs
