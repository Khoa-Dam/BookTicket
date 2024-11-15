import React, { useState } from 'react'
import { ChevronDown, Plane, Check, ChevronRight, Shield } from 'lucide-react'

type PaymentMethod = 'digital-wallet' | 'card' | 'store' | 'vietqr' | 'bank-transfer' | 'atm' | 'installment'

export default function PaymentMethods() {
    const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('digital-wallet')

    return (
        <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
                <h2 className="text-xl font-semibold mb-6">Bạn muốn thanh toán thế nào?</h2>

                <div className="space-y-4">
                    {/* Digital Wallets */}
                    <div>
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="radio"
                                className="form-radio text-blue-600"
                                checked={selectedMethod === 'digital-wallet'}
                                onChange={() => setSelectedMethod('digital-wallet')}
                            />
                            <span>Ví điện tử khác</span>
                            <span className="ml-2 px-2 py-0.5 text-xs bg-green-100 text-green-800 rounded-full">New!</span>
                        </label>

                        {selectedMethod === 'digital-wallet' && (
                            <div className="mt-3 ml-6 p-4 bg-blue-50 rounded-lg">
                                <ul className="text-sm text-gray-600 mb-4 list-disc list-inside space-y-1">
                                    <li>Thanh toán chỉ có sẵn trên ứng dụng được liệt kê bên dưới. Đảm bảo bạn đã cài đặt ứng dụng ví điện tử của mình trước khi tiếp tục.</li>
                                    <li>Sau khi nhấp vào nút 'Thanh toán', bạn sẽ được chuyển hướng đến chọn ví điện tử của mình để xem Mã QR.</li>
                                    <li>Các tùy chọn có sẵn: ShopeePay, ZaloPay, SmartPay và mPAY.</li>
                                </ul>
                                <div className="grid grid-cols-4 gap-4">
                                    <img src="/placeholder.svg?height=40&width=100" alt="ShopeePay" className="h-10" />
                                    <img src="/placeholder.svg?height=40&width=100" alt="ZaloPay" className="h-10" />
                                    <img src="/placeholder.svg?height=40&width=100" alt="SmartPay" className="h-10" />
                                    <img src="/placeholder.svg?height=40&width=100" alt="mPAY" className="h-10" />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Credit/Debit Cards */}
                    <div>
                        <label className="flex items-center justify-between cursor-pointer">
                            <div className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    className="form-radio text-blue-600"
                                    checked={selectedMethod === 'card'}
                                    onChange={() => setSelectedMethod('card')}
                                />
                                <span>Thẻ thanh toán</span>
                            </div>
                            <div className="flex space-x-2">
                                <img src="/placeholder.svg?height=24&width=40" alt="Visa" className="h-6" />
                                <img src="/placeholder.svg?height=24&width=40" alt="Mastercard" className="h-6" />
                                <img src="/placeholder.svg?height=24&width=40" alt="JCB" className="h-6" />
                            </div>
                        </label>
                    </div>

                    {/* Other payment methods */}
                    {[
                        { id: 'store', label: 'Tại cửa hàng', status: '', icons: ['/placeholder.svg?height=24&width=40', '/placeholder.svg?height=24&width=40', '/placeholder.svg?height=24&width=40', '/placeholder.svg?height=24&width=40'] },
                        { id: 'vietqr', label: 'VietQR', status: 'Ưu đãi giảm giá', icons: ['/placeholder.svg?height=24&width=40'] },
                        { id: 'bank-transfer', label: 'Chuyển khoản ngân hàng', status: 'Chỉ có vào 08:00 - 20:00', icons: ['/placeholder.svg?height=24&width=40', '/placeholder.svg?height=24&width=40'] },
                        { id: 'atm', label: 'ATM Cards/Mobile Banking', status: 'Đang bảo trì hệ thống', icons: ['/placeholder.svg?height=24&width=40', '/placeholder.svg?height=24&width=40'] },
                        { id: 'installment', label: 'Trả góp thẻ tín dụng', status: 'Dưới mức tối thiểu', icons: ['/placeholder.svg?height=24&width=40'] },
                    ].map((method) => (
                        <div key={method.id}>
                            <label className="flex items-center justify-between cursor-pointer">
                                <div className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        className="form-radio text-blue-600"
                                        checked={selectedMethod === method.id as PaymentMethod}
                                        onChange={() => setSelectedMethod(method.id as PaymentMethod)}
                                    />
                                    <span>{method.label}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    {method.status && (
                                        <span className="text-sm text-gray-500">{method.status}</span>
                                    )}
                                    <div className="flex space-x-1">
                                        {method.icons.map((icon, index) => (
                                            <img key={index} src={icon} alt={`Payment method ${index + 1}`} className="h-6" />
                                        ))}
                                    </div>
                                </div>
                            </label>
                        </div>
                    ))}
                </div>

                {/* Coupon Section */}
                <div className="mt-6 border-t pt-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <div className="w-5 h-5 rounded-full border-2 border-blue-500 flex items-center justify-center">
                                <ChevronRight className="h-4 w-4 text-blue-500" />
                            </div>
                            <span className="font-medium">Thêm mã giảm</span>
                        </div>
                        <button className="text-blue-500 hover:text-blue-600">Thêm mã</button>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Enter coupon code or select available coupon(s)</p>
                </div>
            </div>

            {/* Flight Summary Card */}
            <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                        <Plane className="h-5 w-5" />
                        <span className="font-medium">Tóm tắt vé máy bay</span>
                    </div>
                    <span className="text-sm text-gray-500">Mã đặt chỗ: 119878Z246</span>
                </div>

                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="font-medium">Jakarta (CGK)</p>
                            <p className="text-sm text-gray-500">19:00</p>
                            <p className="text-sm text-gray-500">Thứ 7, 16 thg 11 2024</p>
                        </div>
                        <div className="text-center">
                            <p className="text-sm text-gray-500">1h 55m</p>
                            <div className="flex items-center">
                                <div className="h-px w-12 bg-gray-300"></div>
                                <Plane className="h-4 w-4 mx-2 text-gray-400" />
                                <div className="h-px w-12 bg-gray-300"></div>
                            </div>
                            <p className="text-sm text-gray-500">bay thẳng</p>
                        </div>
                        <div className="text-right">
                            <p className="font-medium">Bali / Denpasar (DPS)</p>
                            <p className="text-sm text-gray-500">21:55</p>
                            <p className="text-sm text-gray-500">Thứ 7, 16 thg 11 2024</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-2">
                        <img src="/placeholder.svg?height=24&width=24" alt="Citilink" className="h-6 w-6" />
                        <span className="text-sm">Citilink • Phổ Thông</span>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <Check className="h-4 w-4 text-green-500" />
                            <span className="text-sm">Có thể hoàn vé</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Check className="h-4 w-4 text-green-500" />
                            <span className="text-sm">Có áp dụng đổi lịch bay</span>
                        </div>
                    </div>

                    <div className="border-t pt-4">
                        <p className="font-medium">Chi tiết về (các) hành khách</p>
                        <div className="flex items-center space-x-2 mt-2">
                            <span className="text-sm">Mr Asdasdas Asdasd (Người Lớn)</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                        <div className="flex items-center space-x-2">
                            <Shield className="h-5 w-5 text-green-500" />
                            <span className="text-sm font-medium text-green-700">100% SECURITY PAYMENT</span>
                        </div>
                        <img src="/placeholder.svg?height=24&width=80" alt="Security badges" className="h-6" />
                    </div>
                </div>
            </div>
        </div>
    )
}