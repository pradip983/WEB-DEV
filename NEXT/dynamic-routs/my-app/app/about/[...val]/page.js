export default function Page({ params }) {
      console.log(params)
     return <div>My Post: {params.slug}</div>
    }

    // check console