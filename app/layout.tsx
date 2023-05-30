import 'server-only'

import SupabaseListener from './common/components/supabase-listener'
import SupabaseProvider from './common/components/supabase-provider'
import Navigation from './common/components/navigation'
import { createClient } from '../utils/supabase-server'
import React,{ Suspense } from 'react'
import ChakraProv from './chakraProv'
import { Box, Text, Flex, Spacer } from './common/components/chakra'
import Loading from './loading'
import 'tailwindcss/tailwind.css';
export const revalidate = 0

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const supabase = createClient()

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <html>
      <body className='bg-gray-100'>
          <SupabaseProvider>
            <SupabaseListener serverAccessToken={session?.access_token} />
            <ChakraProv>
              <div className="flex flex-col min-h-screen">
                <Navigation />
                <main>
                  {children}
                </main>
              </div>
            </ChakraProv>
          </SupabaseProvider>
      </body>
    </html>
  )
}
{/* <Suspense fallback={<Loading/>}></Suspense> */}
export default RootLayout
