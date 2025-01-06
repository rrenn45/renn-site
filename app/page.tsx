'use client'

import {Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"


export default function Home() {
  return (<><p>Robert Renn</p>
  <Card>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
    </CardHeader>
    <CardContent>
      <p>Card Content</p>
    </CardContent>
    <CardFooter>
      <p>Card Footer</p>
    </CardFooter>
  </Card>
  </>)
}
