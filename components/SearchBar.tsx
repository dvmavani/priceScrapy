"use client"

import { scrapAndStoreProduct } from "@/lib/actions"
import { FormEvent, useState } from "react"
const isValidAmazonProductURL = (url: string) => {
  try{
    const parsedURL = new URL(url)
    const hostName = parsedURL.hostname
    if(hostName.includes('amazon.com')
     || hostName.includes('amazon.')
     || hostName.endsWith('amazon')){
      return true
     }
  }catch(error){
    return false
  }
  return false
}
const SearchBar = () => {
  const [searchPrompt,setSearchPrompt] = useState('')
  const [isLoading,setIsLoading] = useState(false)
  const handleSubmit = async (event: FormEvent<HTMLFormElement> ) => {
    event.preventDefault()
    const isValidLink = isValidAmazonProductURL(searchPrompt)
    if(!isValidLink) return alert('Please Provide valid link')
    try{
      setIsLoading(true)
      const product = await scrapAndStoreProduct(searchPrompt)
    }
    catch(error){
      console.log(error)
    }finally{
      setIsLoading(false)
    }
  }
  return (
    <form className='flex flex-wrap gap-4 mt-12' onSubmit={handleSubmit}>
        <input
        type="text"
        value={searchPrompt}
        onChange={(e)=>setSearchPrompt(e.target.value)}
        placeholder="Enter product url"
        className="searchbar-input"
        ></input>
        <button type="submit" className="searchbar-btn" disabled={searchPrompt === ''}>
          {isLoading? 'Searching....': 'Search'}</button>
    </form>
  )
}

export default SearchBar