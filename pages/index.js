import {Fragment} from "react";
import styles from '../styles/Home.module.css'
import Footer from "../component/Footer/Footer";
import {ErrorMessage, Field, Form, Formik} from "formik"
import * as Yup from "yup";
import {useRouter} from "next/router";


const Home = () => {

    const router = useRouter()

    const searchInitialValue = {
        productName: ''
    }


    const searchValidationSchema = Yup.object({
        productName: Yup.string().required('Please enter any keyword to start search')
    })


    const handleProductSearch = (values) => {
        router.push('/search?name=' + values.productName)
    }


    const categories = [
        {name: 'Wedding Makeup Artist', img: 'images/home/home_1.JPG'},
        {name: 'Fashion Makeup Artist', img: 'images/home/home_2.JPG'},
        {name: 'Creative Makeup Artist', img: 'images/home/home_3.JPG'},
        {name: 'Party Makeup Artist', img: 'images/home/home_4.JPG'},
        {name: 'Advertising Makeup Artist', img: 'images/home/home_5.JPG'},
        {name: 'Event Makeup Artist', img: 'images/home/home_6.JPG'},
    ]

    const bookWithUs = [
        {
            name: "HASSLE FREE BOOKING",
            img: "images/home/ill1.PNG",
            subText: "Lorem ipsum dis parturient montes, nascetur"
        },
        {
            name: "Certified makeup artist",
            img: "images/home/ill2.PNG",
            subText: "Lorem ipsum dis parturient montes, nascetur"
        },
        {
            name: "Mutliple payment option",
            img: "images/home/ill3.PNG",
            subText: "Lorem ipsum dis parturient montes, nascetur"
        },
        {
            name: "Genuine rating system",
            img: "images/home/ill4.PNG",
            subText: "Lorem ipsum dis parturient montes, nascetur"
        },
    ]


    return (
        <Fragment>


            <section className="position-relative padding-nine-tb  bg-overlay bg-animate cover-background"
                     style={{backgroundImage: "url('images/home/slider1.jpg')"}}>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className="banner-headline">
                                Discover the top products
                            </h1>

                            <div className="col-md-6 offset-md-3">

                                <Formik initialValues={searchInitialValue}
                                        validationSchema={searchValidationSchema}
                                        onSubmit={handleProductSearch}
                                >
                                    <Form>
                                        <div className="top-header-search">
                                            <Field type="text" placeholder="Enter keyword to search"
                                                   name="productName"
                                                   className="form-control header-search-input"/>
                                            <button className="btn btn-block mt-3 searchBtn" type="submit">
                                                Search
                                            </button>

                                            <p className="text-danger mt-2  alert-custom-danger">
                                                <ErrorMessage name="productName"/>
                                            </p>

                                            <p className="alert alert-info">
                                                Try Searching keyword like "table", "shoes", "shirt", "computer"
                                            </p>

                                        </div>
                                    </Form>
                                </Formik>


                            </div>

                        </div>
                    </div>
                </div>
            </section>


            <section className={styles.bgGrey}>
                <section className={`${styles.bgWhite} ptb25`}>
                    <div className="container">
                        <div className="col-md-12">

                            <h2 className={styles.heading}>
                                Top categories
                            </h2>

                            <div className="row">
                                {categories.map((cat, index) => {
                                    return (
                                        <div className="col-6 col-lg-3">
                                            <div className={styles.categoryGrid}>
                                                <div className={styles.catImgBlock}>
                                                    <img src={cat.img} alt={cat.name} className={styles.catImage}/>
                                                </div>
                                                <div className={styles.catContent}>
                                                    <h5 className={styles.catHeading}>
                                                        {cat.name}
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                                }
                            </div>
                        </div>
                    </div>
                </section>
                <section className={`${styles.bgWhite} ptb25 mt25`}>
                    <div className="container">
                        <div className="col-md-12">

                            <h2 className={styles.heading}>
                                WHY BOOK WITH US ?
                            </h2>

                            <div className="row">

                                {bookWithUs.map((book, index) => {
                                    return (
                                        <div className="col-md-6">
                                            <div className={styles.gridNoShadow}>
                                                <div className={styles.gridNoShadowImgBlock}>
                                                    <img src={book.img} alt="grid1" className={styles.noShadowImg}/>
                                                </div>

                                                <div className={styles.gridNoShadowContentBlock}>
                                                    <h2 className={styles.noShadowHeading}>
                                                        {book.name}
                                                    </h2>

                                                    <p className={styles.noShadowSubContent}>
                                                        {book.subText}
                                                    </p>

                                                </div>

                                            </div>
                                        </div>
                                    )
                                })
                                }


                            </div>

                        </div>
                    </div>

                </section>


                <Footer/>

            </section>


        </Fragment>
    )
}

export default Home