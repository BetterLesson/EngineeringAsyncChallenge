import com.google.gson.annotations.SerializedName;

import java.util.Arrays;
import java.util.Objects;

/**
 *   "UUID": 12345678,
 *   "Customer Name": "Jane Doe",
 *   "Cell Phone": "405.867.5309",
 *   "Email": "jane_teacher@gmail.com",
 *   "Address": "123 School Way, Dallas TX 75001",
 *   "Coaching Service ID": [37,2002,101],
 *   "Book Set ID": [22,21],
 *   "Order Total": 37.99,
 *   "Order Date": "12/25/22T23:00:05Z",
 *   "Discount Code": "CHEAP"
 */
public class Order {

    public int UUID;
    @SerializedName("Customer Name")
    public String customerName;
    @SerializedName("Cell Phone")
    public String cellPhone;
    @SerializedName("Email")
    public String email;
    @SerializedName("Address")
    public String address;
    @SerializedName("Coaching Service ID")
    public int[] coachingServiceId;
    @SerializedName("Book Set ID")
    public int[] bookSetId;
    @SerializedName("Order Total")
    public float orderTotal;
    @SerializedName("Order Date")
    public String orderDate;
    @SerializedName("Discount Code")
    public String discountCode;

    public int getUUID() {
        return UUID;
    }

    public void setUUID(int UUID) {
        this.UUID = UUID;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getCellPhone() {
        return cellPhone;
    }

    public void setCellPhone(String cellPhone) {
        this.cellPhone = cellPhone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int[] getCoachingServiceId() {
        return coachingServiceId;
    }

    public void setCoachingServiceId(int[] coachingServiceId) {
        this.coachingServiceId = coachingServiceId;
    }

    public int[] getBookSetId() {
        return bookSetId;
    }

    public void setBookSetId(int[] bookSetId) {
        this.bookSetId = bookSetId;
    }

    public float getOrderTotal() {
        return orderTotal;
    }

    public void setOrderTotal(float orderTotal) {
        this.orderTotal = orderTotal;
    }

    public String getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(String orderDate) {
        this.orderDate = orderDate;
    }

    public String getDiscountCode() {
        return discountCode;
    }

    public void setDiscountCode(String discountCode) {
        this.discountCode = discountCode;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Order order = (Order) o;
        return UUID == order.UUID && Float.compare(order.orderTotal, orderTotal) == 0 && Objects.equals(customerName, order.customerName) && Objects.equals(cellPhone, order.cellPhone) && Objects.equals(email, order.email) && Objects.equals(address, order.address) && Arrays.equals(coachingServiceId, order.coachingServiceId) && Arrays.equals(bookSetId, order.bookSetId) && Objects.equals(orderDate, order.orderDate) && Objects.equals(discountCode, order.discountCode);
    }

    @Override
    public int hashCode() {
        int result = Objects.hash(UUID, customerName, cellPhone, email, address, orderTotal, orderDate, discountCode);
        result = 31 * result + Arrays.hashCode(coachingServiceId);
        result = 31 * result + Arrays.hashCode(bookSetId);
        return result;
    }

    @Override
    public String toString() {
        return "Order{" +
                "UUID=" + UUID +
                ", customerName='" + customerName + '\'' +
                ", cellPhone='" + cellPhone + '\'' +
                ", email='" + email + '\'' +
                ", address='" + address + '\'' +
                ", coachingServiceId=" + Arrays.toString(coachingServiceId) +
                ", bookSetId=" + Arrays.toString(bookSetId) +
                ", orderTotal=" + orderTotal +
                ", orderDate='" + orderDate + '\'' +
                ", discountCode='" + discountCode + '\'' +
                '}';
    }
}
