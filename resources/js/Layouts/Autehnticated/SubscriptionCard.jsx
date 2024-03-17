import Button from "@/Components/Button";
import React from "react";
import { FaCheck, FaStar } from "react-icons/fa6";

export default function SubscriptionCard({
    id,
    name,
    price,
    durationInMonth,
    features,
    isPremium,
    onSelectSubscription,
}) {
    return (
        <>
            {!isPremium && (
                <section className="subscription-card">
                    <div>
                        <div className="subscription-name">{name}</div>
                        <div className="subscription-price">
                            IDR {price.toLocaleString()}
                        </div>
                        <p className="subscription-duration">
                            /{durationInMonth} months
                        </p>
                    </div>
                    <div className="feature">
                        {features.map((feature, index) => (
                            <div
                                className="feature-items"
                                key={`${index}-${id}-${feature}`}
                            >
                                <div className="icons-check-basic">
                                    <FaCheck />
                                </div>
                                {feature}
                            </div>
                        ))}
                    </div>
                    <div onClick={onSelectSubscription}>
                        <Button variant="outline-black">Start {name}</Button>
                    </div>
                </section>
            )}

            {isPremium && (
                <section className="subscription-card-premium">
                    <div className="icons-subs">
                        <FaStar />
                    </div>
                    <div>
                        <div className="subscription-name">{name}</div>
                        <div className="subscription-price">
                            IDR {price.toLocaleString()}
                        </div>
                        <p className="subscription-duration">
                            /{durationInMonth} months
                        </p>
                    </div>
                    <div className="feature">
                        {features.map((feature, index) => (
                            <div
                                className="feature-items"
                                key={`${index}-${id}-${feature}`}
                            >
                                <div className="icons-check">
                                    <FaCheck />
                                </div>
                                {feature}
                            </div>
                        ))}
                    </div>
                    <div onClick={onSelectSubscription}>
                        <Button variant="blue">Start {name}</Button>
                    </div>
                </section>
            )}
        </>
    );
}
