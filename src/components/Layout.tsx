
import Sidebar from './blocks/Sidebar'
import { ThemeProvider } from './base/ui/themeProvider'

export default function Layout() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <div className='flex h-screen'>
          <Sidebar/>   
      </div>
    </ThemeProvider>
  )
}
