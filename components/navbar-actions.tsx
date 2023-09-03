'use client'

import Button from '@/components/ui/button'
import useCart from '@/hooks/use-carts'
import { ShoppingBag } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import AccountMenu from './AccountMenu'

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [showAccountMenu, setShowAccountMenu] = useState(false)

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current)
  }, [])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const cart = useCart()
  const router = useRouter()

  if (!isMounted){
    return null
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button onClick={() => router.push('/cart')} className='flex items-center rounded-full bg-black px-4 py-2'>
        <ShoppingBag size={20} color="white" />
        <span className='ml-2 text-sm font-medium text-white'>
          {cart.items.length}
        </span>
      </Button>
      <div onClick={toggleAccountMenu} className="flex flex-row items-center gap-2 cursor-pointer relative">
        {/* <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <img src="/images/default-blue.png" alt="" />
            </div> */}
        <AiOutlineUser className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden" />
        <BsChevronDown className={`text-black transition ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`} />
        <AccountMenu visible={showAccountMenu} />
      </div>
    </div>
  )
}

export default NavbarActions