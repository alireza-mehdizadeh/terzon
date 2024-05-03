import React from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import Accordion from '../../../components/Accordion/Accordion'

export default function Products() {
    return (
        <div>

            <div className="mb-3 mt-2">
                <Accordion light title='افزودن محصول جدید'>
                    <Container fluid className='d-flex justify-content-center gap-2 flex-wrap'>

                        <input type="text" style={{ maxWidth: '350px' }} placeholder='نام محصول به فارسی رو وارد کنید...' className='form-control' />

                        <input type="text" style={{ maxWidth: '350px' }} placeholder='نام محصول به انگلیسی رو وارد کنید...' className='form-control' />

                        <input type="text" style={{ maxWidth: '350px' }} placeholder='قیمت محصول رو وارد کنید...' className='form-control' />

                        <input type="text" style={{ maxWidth: '350px' }} placeholder='رنگ های محصول رو وارد کنید...' className='form-control' />

                        <input type="text" style={{ maxWidth: '350px' }} placeholder='تعداد موجود محصول رو وارد کنید...' className='form-control' />

                        <input type="text" style={{ maxWidth: '350px' }} placeholder='تگ های محصول رو وارد کنید...' className='form-control' />

                        <textarea className='w-100 form-control mb-5' rows="7" placeholder='متن توضیح برای محصول...'></textarea>

                        <input type="text" style={{ maxWidth: '350px' }} placeholder='نام محصول به فارسی رو وارد کنید...' className='form-control' />

                        <input type="text" style={{ maxWidth: '350px' }} placeholder='نام محصول به فارسی رو وارد کنید...' className='form-control' />

                        <input type="text" style={{ maxWidth: '350px' }} placeholder='نام محصول به فارسی رو وارد کنید...' className='form-control' />

                        <input type="text" style={{ maxWidth: '350px' }} placeholder='نام محصول به فارسی رو وارد کنید...' className='form-control' />

                        <input type="text" style={{ maxWidth: '350px' }} placeholder='نام محصول به فارسی رو وارد کنید...' className='form-control' />

                        <input type="text" style={{ maxWidth: '350px' }} placeholder='نام محصول به فارسی رو وارد کنید...' className='form-control' />

                        <input type="text" style={{ maxWidth: '350px' }} placeholder='نام محصول به فارسی رو وارد کنید...' className='form-control' />

                        <input type="text" style={{ maxWidth: '350px' }} placeholder='نام محصول به فارسی رو وارد کنید...' className='form-control' />

                        <input type="text" style={{ maxWidth: '350px' }} placeholder='نام محصول به فارسی رو وارد کنید...' className='form-control' />

                        <div className="w-100 mt-5 fs-6">
                            <Button variant='primary' className='px-4'>افزودن محصول</Button>
                        </div>

                    </Container>
                </Accordion>
            </div>

            <Table className='align-middle text-center' striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>نام محصول</th>
                        <th>قیمت</th>
                        <th>دسته بندی</th>
                        <th>ویرایش</th>
                        <th>حذف</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>سامسونگ مدل Galaxy S22 دو سیم کارت ظرفیت 256 گیگابایت</td>
                        <td>75,000,000</td>
                        <td>موبایل و تلفن همراه</td>
                        <td>
                            <Button variant='primary'>ویرایش</Button>
                        </td>
                        <td>
                            <Button variant='danger'>حذف</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>سامسونگ مدل Galaxy S22 دو سیم کارت ظرفیت 256 گیگابایت</td>
                        <td>75,000,000</td>
                        <td>موبایل و تلفن همراه</td>
                        <td>
                            <Button variant='primary'>ویرایش</Button>
                        </td>
                        <td>
                            <Button variant='danger'>حذف</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>سامسونگ مدل Galaxy S22 دو سیم کارت ظرفیت 256 گیگابایت</td>
                        <td>75,000,000</td>
                        <td>موبایل و تلفن همراه</td>
                        <td>
                            <Button variant='primary'>ویرایش</Button>
                        </td>
                        <td>
                            <Button variant='danger'>حذف</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>

        </div>
    )
}