export default function ServiceSummary({ services, selectedServices, calculateServiceTotal }) {
  const total = Object.keys(selectedServices).reduce((total, serviceId) => {
    return total + calculateServiceTotal(serviceId);
  }, 0);
  const selectedCount = Object.keys(selectedServices).length;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-bold mb-4">Your Custom Plan</h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center text-sm">
          <span>Selected Services:</span>
          <span className="font-medium">{selectedCount}</span>
        </div>
        {Object.entries(selectedServices).map(([serviceId, service]) => (
          <div key={serviceId} className="border-t pt-2">
            <div className="flex justify-between items-center">
              <span className="font-medium">{services[serviceId].name}</span>
              <span>${calculateServiceTotal(serviceId).toLocaleString()}</span>
            </div>
            {service.selectedSubServices.length > 0 && (
              <div className="mt-1 pl-2 text-sm text-gray-600">
                {service.selectedSubServices.map(subService => (
                  <div key={subService} className="flex justify-between">
                    <span>{subService}</span>
                    <span>
                      ${services[serviceId].subServices.find(s => s.name === subService).price.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="border-t pt-4 mt-4">
          <div className="flex justify-between items-center font-bold">
            <span>Total:</span>
            <span>${total.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
} 