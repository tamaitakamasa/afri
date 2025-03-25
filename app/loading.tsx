import LoadingOverlay from "@/components/common/loading-overlay";

export default function Loading() {
  return <LoadingOverlay isLoading={true} spinnerColor="primary" spinnerSize="lg" />;
}
