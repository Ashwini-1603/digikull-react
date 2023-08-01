export default function Extra(){
    async function fetchData() {
        try {
          const response = await axios.get(" http://localhost:3000")
          setUser(response.data)
        } catch (error) {
          console.error(error);
        }
      }
      useEffect(() => {
        fetchData();
      },[])
    return(
<h1>hello</h1>
    )
}