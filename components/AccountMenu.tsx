// import useCurrentUser from '@/hooks/useCurrentUser'
import { signIn, signOut } from 'next-auth/react'

interface AccountMenuProps {
  visible?: boolean
}

const AccountMenu: React.FC<AccountMenuProps> = ({
  visible
}) => {
  // const { data } = useCurrentUser()

  if (!visible) {
    return null
  }

  return (
    <div className='bg-white w-56 absolute top-14 right-0 py-5 flex-col border rounded-md z-50'>
      <div className='flex flex-col'>
        <div className='px-3 group/item flex flex-row gap-1 items-center w-full'>
          {/* <img src="/images/default-blue.png" alt="" className='w-8 rounded-md' /> */}
          <p className='text-black text-sm group-hover/item:underline'>
            {/* {data?.name} */}
            User
          </p>
        </div>
        <hr className='bg-gray-600 border-0 h-px my-4' />
        <div className='px-3 text-center text-black hover:underline'
          onClick={() => signIn()}
        >
          Sign in
        </div>
        <hr className='bg-gray-600 border-0 h-px my-4' />
        <div className='px-3 text-center text-black hover:underline'
          onClick={() => signOut()}
        >
          Sign out 
        </div>
        
      </div>
    </div>
  );
}

interface AccountMenuProps {

}

export default AccountMenu;