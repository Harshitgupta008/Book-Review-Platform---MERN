
const HealthCheck = ( req, res)=>{
    return res.status(200).send("server working properlly")
}

export { HealthCheck };