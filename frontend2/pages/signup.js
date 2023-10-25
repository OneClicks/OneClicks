import React from 'react'
import SignupComponent from '@/components/SignupComponent/SignupComponent'

function signup() {
  return (
    <SignupComponent/>
    )
}

export async function getServerSideProps() {
  return {
    props: {
      hideHeaderFooter: true, 
    },
  };
}

export default signup