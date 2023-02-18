import 'server-only'

import SupabaseListener from './common/components/supabase-listener'
import SupabaseProvider from './common/components/supabase-provider'
import Navigation from './common/components/navigation'
import { createClient } from '../utils/supabase-server'
import React from 'react'
import 'tailwindcss/tailwind.css';
export const revalidate = 0

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const supabase = createClient()

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <html>
      <body>
        <SupabaseProvider>
          <SupabaseListener serverAccessToken={session?.access_token} />

          <div className="flex flex-col min-h-screen">
            <Navigation />

            <main className="flex-1 container max-w-screen-x1 mx-auto px-5 py-10">
              {children}
            </main>

            <footer className="py-5 border-t">
              <div className="text-center text-sm text-gray-500">
               Copyright © All rights reserved Akira
              </div>
            </footer>
          </div>
        </SupabaseProvider>
      </body>
    </html>
  )
}

export default RootLayout


// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="ja">
//       <head />
//       <body>
//         <Provider>
//           <Header />
//             <Main>
//               <Suspense fallback={<Loading/>}>
//                 {children}
//               </Suspense>
//             </Main>
//           <Footer />
//         </Provider>
//       </body>
//     </html>
//   );
// }
