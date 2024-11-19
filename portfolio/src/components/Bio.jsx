import { BIO } from "../constants"

const Bio = () => {
  return (
    <section className="max-w-4xl gap-12 mt-20 ml-auto mr-auto p-2" id="bio">
      <h2 className="text-center text-3xl lg:text-4xl">Bio</h2>
      <div className="">
        {BIO.map((bio, index) => (
            <p key={index} className="mb-4 text-lg lg:text-xl text-center justify-center">
                {bio}
            </p>
        ))}
      </div>
    </section>
  )
}

export default Bio
