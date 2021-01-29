import {Fragment, useEffect, useState} from "react";
import {useRouter} from "next/router";
import axios from "axios"
import styles from '../styles/Search.module.css'
import Footer from "../component/Footer/Footer";

const Search = () => {

    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [productsList, setProductsList] = useState([])


    const handleSearchApi = () => {
        //loader start
        setLoading(true)

        if (!router.query.name) return

        //api call to fetch data
        axios.get('https://60143c49b538980017568f03.mockapi.io/api/getProductsList/productsList?name=' + router.query.name)
            .then((res) => {
                console.log('response', res)
                if (res.status) {
                    setProductsList(res.data)
                }
            }).catch((err) => {
            console.log('error in getting profile info', err)
            setProductsList([])
        }).finally(() => {
            setLoading(false)
        })
    }


    useEffect(() => {
        if (!router.query.name) return;

        handleSearchApi()
    }, [router.query.name])

    return (
        <Fragment>


            <section className={styles.shopNowSlider}>
                <div className="container">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-6">
                                <h1 className={styles.mainHeading}>
                                    Organic Products
                                </h1>

                                <h6 className={styles.subHeading}>
                                    Select Producers come together to offer high quality products at wholesale prices.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </h6>

                                <button onClick={()=>{router.push('/')}} className="searchBtn mt-5 mb-5">
                                    Go to HomePage
                                </button>

                            </div>
                            <div className="col-md-6">
                                <img src="https://organiccommunitymarketfrontend.imgix.net/vegetable-bg.png?w=505&h=250"
                                     alt="search image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="mt-5 mb-5">
                <div className="container">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-3">
                                <div className={styles.shopGrid}>
                                    <h5 className={styles.cat}>
                                        Filter Category
                                    </h5>

                                    <button onClick={()=>{router.push('/')}} className="searchBtn mt-5 mb-5">
                                        Go to HomePage
                                    </button>

                                </div>
                            </div>

                            <div className="col-md-9">
                                {!loading &&
                                <h1 className={styles.searchNumber}>
                                    Showing {productsList.length} Results for "{router.query.name}"
                                </h1>
                                }

                                {loading &&

                                <div className="col-md-12 text-center mt25">
                                    <div className="loader"/>
                                </div>

                                }

                                <div className="row">

                                    {productsList.length > 0 && productsList.map((product, index) => {
                                        return (
                                            <Fragment>
                                                <div className="col-md-4" key={index}>
                                                    <div className={styles.categoryGrid}>
                                                        <div className={styles.catImgBlock}>
                                                            <img src={product.image} alt={product.name}
                                                                 className={styles.catImage}/>
                                                        </div>
                                                        <div className={styles.catContent}>
                                                            <h5 className={styles.catHeading}>
                                                                {product.name}
                                                            </h5>

                                                            <p className={styles.price}>
                                                                Rs. {product.price}
                                                            </p>

                                                        </div>
                                                    </div>
                                                </div>
                                            </Fragment>
                                        )
                                    })
                                    }

                                    {(productsList.length === 0) && !loading &&
                                        <Fragment>
                                            <h4 className={styles.noProductFind}>
                                                No products found for this search. Please try again with other search keyword like
                                                "table", "shoes", "shirt", "computer"
                                            </h4>
                                        </Fragment>
                                    }

                                </div>

                            </div>


                        </div>

                    </div>
                </div>
            </section>


            <Footer/>


        </Fragment>
    )
}

export default Search