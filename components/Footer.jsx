import FooterLinks from './FooterLinks';

const Footer = () => {
  return (
    <footer className='w-full mx-auto border-t border-solid border-violet-200 dark:border-slate-900'>
      <div 
        className="footer"
      >
        <p className='black text-xl font-bold'>Nathan Tran's Other Links</p>
        <FooterLinks/>
      </div>
    </footer>
  )
}

export default Footer