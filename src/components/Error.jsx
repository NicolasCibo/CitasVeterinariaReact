function Error({children}) {
  return (
    <div className="bg-red-700 text-white text-center uppercase p-3 mb-3 font-bold rounded-md">
        {children}
    </div>
  )
}

export default Error