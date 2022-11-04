package com.jeffgoyette.database;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "orders")
@Builder
public class Order {
    @Id
    private Long id;
    private Double orderTotal;
    private String orderDate;

    @ElementCollection // 1
    @CollectionTable(name = "coaching_service", joinColumns = @JoinColumn(name = "id")) // 2
    @Column(name = "coaching_service_ids") // 3
    private List<Long> coachingServiceId;

    @ElementCollection // 1
    @CollectionTable(name = "book_set", joinColumns = @JoinColumn(name = "id")) // 2
    @Column(name = "book_set_ids") // 3
    private List<Long> bookSetId;

    @ManyToOne
    private Customer customer;

    private String discountCode;
}
