package com.jeffgoyette.database;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Document("order")
public class OrderNoSQL {
    private Long uuid;
    private String customerName;
    private String cellPhone;
    private String email;
    private String address;
    private List<Long> coachingServiceId;
    private List<Long> bookSetId;
    private Double orderTotal;
    private String orderDate;
    private String discountCode;
}
