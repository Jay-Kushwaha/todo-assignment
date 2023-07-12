import Image from 'next/image'
import TodosCompIndex from './todos/ui'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <TodosCompIndex/>
     
    </main>
  )
}
