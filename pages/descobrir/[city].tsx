import { useRouter } from "next/router";

export default function Descobrir(){
    const router = useRouter();
    const city = router.query.city;

    return(
        <h1>é o descubras, {city} ?</h1>
    )
}