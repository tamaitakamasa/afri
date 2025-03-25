"use client";

import { ComponentType, useState, useEffect } from "react";
import LoadingOverlay from "./loading-overlay";

interface WithLoadingProps {
  isLoading?: boolean;
}

export default function withLoading<P extends WithLoadingProps>(
  Component: ComponentType<P>
) {
  return function WithLoadingComponent(props: P) {
    const [loading, setLoading] = useState(props.isLoading || false);

    // propsのisLoadingが変更されたら反映
    useEffect(() => {
      if (props.isLoading !== undefined) {
        setLoading(props.isLoading);
      }
    }, [props.isLoading]);

    return (
      <div className="relative">
        <LoadingOverlay isLoading={loading} />
        <Component {...props} isLoading={loading} />
      </div>
    );
  };
}
